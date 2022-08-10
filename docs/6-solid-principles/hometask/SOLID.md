## Solid

| Principle                           | Examples    |
| ----------------------------------- | ----------- |
| Single Responsibility Principle	  | https://github.com/photonstorm/phaser/blob/master/src/scene/Scene.js#L23-L322       |
| Open / Closed Principle	          | https://github.com/photonstorm/phaser/blob/master/src/utils/Class.js#L173-L244        |
| Liskov Substitution Principle       | https://github.com/angular/angular/blob/main/packages/forms/src/directives/ng_model_group.ts#L51-L78        |
| Interface Seggregation Principle    | https://github.com/photonstorm/phaser/blob/368b37b916b6d9a2e6f50dba13053017682f7739/plugins/spine/src/runtimes/spine-webgl.d.ts#L45-L72        |
| Dependency Inversion Principle      | https://github.com/photonstorm/phaser/blob/368b37b916b6d9a2e6f50dba13053017682f7739/plugins/spine/src/runtimes/spine-webgl.d.ts#L14-L17
https://github.com/photonstorm/phaser/blob/368b37b916b6d9a2e6f50dba13053017682f7739/plugins/spine/src/runtimes/spine-webgl.d.ts#L14-L17        |


## Anti Solid

| Principle                                  | Examples    |
| ------------------------------------------ | ----------- |
| Anti - Single Responsibility Principle	 | Singleton, God object       |
| Anti - Open / Closed Principle	         | Singleton, Lightweight       |
| Anti - Liskov Substitution Principle       | unexpected behavior        |
| Anti - Interface Seggregation Principle    | https://github.com/solidjs/solid/blob/main/packages/solid/src/server/rendering.ts#L118-L145        |
| Anti - Dependency Inversion Principle      | Service locator        |