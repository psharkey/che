Eclipse Che is a platform for creating distributed developer tooling. There are numerous ways to extend, modify, and customize Eclipse Che. This document itemizes all of the resources available for customizing Che. We have documentation pages, tutorials, and specifications.

#### Stacks
A stack is the configuration of a runtime that can be used to power a workspace. Users choose the stack that powers a workspace within the user dashboard. Stacks have a recipe that defines how the container should be created and also meta data that defines the tags associated with the stack. 
* [Add Your Stacks to Che](https://www.eclipse.org/che/docs/workspace/stacks/index.html#custom-stack)
* [Stack Data Model](https://www.eclipse.org/che/docs/workspace/data-model-stacks/index.html)
* [Che Included Stacks](https://www.eclipse.org/che/docs/workspace/stacks/index.html#ready-to-go-stacks)
* [Add Your Stack](https://www.eclipse.org/che/docs/workspace/stacks/index.html#create-a-stack)

#### Recipes
A recipe defines the runtime of a workspace environment.  Workspaces can have multiple environments, each with their own runtime.  Che supports different kinds of runtimes, but the default is Docker letting us make use of [Dockerfiles](https://docs.docker.com/engine/reference/builder/) as recipes. 
* [Recipes](https://www.eclipse.org/che/docs/workspace/recipes/index.html)
* [Che Included Recipes](https://github.com/eclipse/che-dockerfiles/tree/master/recipes)
* [Writing Single Container Recipes](https://www.eclipse.org/che/docs/workspace/recipes/index.html#single-container-recipes)
* [Writing Multiple Container Recipes](https://www.eclipse.org/che/docs/workspace/recipes/index.html#multi-container-recipes)

#### Sample Projects
A sample project is a packaged set of sample code that is launched in the workspace when a user creates a new project. Users can select from a sample project while using the user dashboard. Sample project have both sample code and a default set of commands associated with them and are loaded based upon the type of stack selected. You can add your own project to the default Che distribution.
* [Samples](https://www.eclipse.org/che/docs/workspace/samples/index.html)
* [Add Sample Project](https://www.eclipse.org/che/docs/workspace/samples/index.html#register-new-project-templates)
* [Template Data Model](https://www.eclipse.org/che/docs/workspace/data-model-samples/index.html)
* [Add Your Template to Default Che Assembly](https://www.eclipse.org/che/docs/workspace/samples/index.html#add-your-template-to-default-che-assembly)

#### Commands
A command is a process that is injected into your workspace. It's outputs are streamed into the console. Commands have type and you can create, save, update and delete commands from within the IDE. You can create templates that have sample projects with default commands that are pre-populated in the IDE. Commands can reference macros that intelligently navigate the project tree or current selections.
* [Commands](https://www.eclipse.org/che/docs/ide/commands/index.html)
* [Macros](https://www.eclipse.org/che/docs/ide/commands/index.html#macros)
* [Command Data Model](https://eclipse-che.readme.io/docs/command)

#### Plugins Development
An plugins is a set of code and resources that are packaged into a plugin that alter the behavior of the system. Plugins can be IDE extensions, workspace extensions (they are injected into the workspace agent running within each workspace), or Che extensions (injected into the Che server). Plugins are authored in Java and maven, and then packaged into JAR / ZIP files for deployment into Eclipse Che.
* [Extension Intro](https://www.eclipse.org/che/docs/plugins/introduction/index.html)
* [Developing Plugins](https://eclipse-che.readme.io/docs/create-and-build-extensions)
* [JSON Extension Tutorial](https://eclipse-che.readme.io/docs/introduction-1#section-the-json-example)
* [Authoring Plugins in Che](https://eclipse-che.readme.io/docs/setup-che-workspace#author-extension-using-the-che-ide)
* [Authoring Plugins in Eclipse](https://eclipse-che.readme.io/docs/setup-che-workspace#author-extension-using-the-eclipse-ide)
* [Authoring Plugins in IntelliJ](https://eclipse-che.readme.io/docs/setup-che-workspace#author-extensions-using-intellij-ide)
* [Dependency Injection](https://eclipse-che.readme.io/docs/dependency-injection-basics)
* [Plugins Packaged With Che](https://github.com/eclipse/che/tree/master/plugins)
* [Plugins SDK JavaDoc](https://eclipse-che.readme.io/docs/java-class-reference)

#### IDE Extensions
IDE extensions are compiled into JavaScript with other extensions to create a single, JavaScript application. You can package many extensions together into a single JavaScript application. The JavaScript application is cross-browser optimized. You can debug extensions and perform execution traces from within the browser of extension code. IDE extensions can invoke REST services that are running within the Che server or within a workspace. Che provides default workspace REST APIs or you can provide your own with workspace extensions.
* [Invoking Workspace REST APIs](https://eclipse-che.readme.io/docs/calling-workspace-apis)
* [Editors](https://eclipse-che.readme.io/docs/code-editors)
* [Project Type](https://eclipse-che.readme.io/docs/project-types)
* [Actions](https://eclipse-che.readme.io/docs/actions)
* [Services](https://eclipse-che.readme.io/docs/serverworkspace-access)
* [Parts](https://eclipse-che.readme.io/docs/parts)
* [Commands](https://github.com/benoitf/ide-plugin-demo)
* [Events](https://eclipse-che.readme.io/docs/events)
* * TODO: Panels 
* * TODO: Popups
* * TODO: Wizards

#### Server-Side Extensions
Server-side extensions are libraries that are deployed into the workspace agent when the workspace is activated. Che deploys some standard server-side extensions that expose the Workspace REST API to the outside world. You can author extensions that modify or extend this API with your own services. New workspace APIs are exposed as JAX-RS services and you use dependency injection to define the API interfaces.
* * TODO: JAX-RS Conventions
* * TODO: Adding Custom Services into Workspace Agent

#### Workspace REST API
IDE extensions have access to a default set of workspace APIs that are deployed within each workspace. These APIs are available through a Swagger configuration. 
* [Swagger](https://eclipse-che.readme.io/docs/rest-api)
* [Authentication](https://eclipse-che.readme.io/docs/authentication)
* [Workspaces](https://eclipse-che.readme.io/docs/create-workspaces-and-projects)
* [Projects](https://eclipse-che.readme.io/docs/api-projects)
* [Project Types](https://eclipse-che.readme.io/docs/custom-project-types)
* [File Access](https://eclipse-che.readme.io/docs/edit-build-and-run)
* [Events](https://eclipse-che.readme.io/docs/events)

#### Plug-Ins and Assemblies
A plugin is a set of extensions (both IDE and workspace extensions) along with their collective reosurces that are packaged into a single deployable unit, usually as a JAR or ZIP file. An assembly is a set of plug-ins combined with the Eclipse Che core that is assembled into a re-distributable set of binaries. A new assembly can fundamentally alter the Che branding. Che can create assemblies packaged as a desktop IDE or as a new Che server.
* [Plugin Development](https://eclipse-che.readme.io/docs/plug-ins)
* [Drag and Drop](https://eclipse-che.readme.io/docs/developing-plugins) - Not yet updated for 4.x
* [Assemblies](https://eclipse-che.readme.io/docs/assemblies)
