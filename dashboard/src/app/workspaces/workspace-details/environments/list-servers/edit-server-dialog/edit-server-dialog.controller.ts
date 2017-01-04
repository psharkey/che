/*
 * Copyright (c) 2015-2016 Codenvy, S.A.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Codenvy, S.A. - initial API and implementation
 */
'use strict';
import {IServer} from '../server';
import {ListServersController} from '../list-servers.controller';

/**
 * @ngdoc controller
 * @name list.environment.variables.controller:EditServerDialogController
 * @description This class is handling the controller for the dialog box about adding a new server or editing an existing one.
 * @author Oleksii Kurinnyi
 */
export class EditServerDialogController {
  $mdDialog: ng.material.IDialogService;
  lodash: _.LoDashStatic;

  toEdit: string;
  servers: {
    [reference: string]: IServer
  };

  usedPorts: number[];
  usedReferences: string[];

  port: number;
  portMin: number = 1024;
  portMax: number = 65535;
  protocol: string;
  reference: string;

  callbackController: ListServersController;

  /**
   * Default constructor that is using resource
   * @ngInject for Dependency injection
   */
  constructor($mdDialog: ng.material.IDialogService, lodash: _.LoDashStatic) {
    this.$mdDialog = $mdDialog;
    this.lodash = lodash;

    // get used ports and references
    let serversCopy = angular.copy(this.servers);
    if (this.toEdit && serversCopy[this.toEdit]) {
      delete serversCopy[this.toEdit];
    }
    this.usedPorts = this.lodash.map(serversCopy, (server: IServer) => {
      return  parseInt(<string>server.port, 10);
    });
    this.usedReferences = Object.keys(serversCopy);

    if (this.toEdit && this.servers[this.toEdit]) {
      let server = this.servers[this.toEdit];
      this.reference = this.toEdit;
      this.protocol = server.protocol;
      this.port = parseInt(<string>server.port, 10);
    } else {
      this.protocol = 'http';
      this.port = this.getLowestFreePort();
    }

  }

  /**
   * Check if port is unique.
   *
   * @param {number} port port to test
   * @returns {boolean}
   */
  isUniquePort(port: number): boolean {
    return this.usedPorts.indexOf(port) < 0;
  }

  /**
   * Check if reference is unique.
   *
   * @param {string} reference reference name to test
   * @returns {boolean}
   */
  isUniqueReference(reference: string): boolean {
    return this.usedReferences.indexOf(reference) < 0;
  }

  /**
   * Returns the lowest free port.
   *
   * @returns {number}
   */
  getLowestFreePort(): number {
    let port: number;
    for (port = this.portMin; port <= this.portMax; port++) {
      if (this.usedPorts.indexOf(port) < 0) {
        break;
      }
    }
    return port;
  }

  /**
   * Hide the dialog box.
   */
  hide(): void {
    this.$mdDialog.hide();
  }

  /**
   * Add new server or update an existing one
   */
  saveServer(): void {
    if (this.toEdit) {
      this.callbackController.updateServer(this.toEdit, this.reference, this.port, this.protocol);
    } else {
      this.callbackController.addServer(this.reference, this.port, this.protocol);
    }
    this.hide();
  }
}
