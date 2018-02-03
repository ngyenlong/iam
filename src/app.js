export class App {

    configureRouter(config, router) {
        config.title = 'Todo';
        config.map([
            {route: '',          moduleId: 'home',        title: 'Home'},
            {route: 'tasks/:id', moduleId: 'task-detail',  name: 'tasks'}
        ]);

        this.router = router;
    }
}
