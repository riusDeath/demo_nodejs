function applyMiddlewareByMonkeypatching(store, middlewares) {
    middlewares = middlewares.slice()
    middlewares.reverse()
  
    // Transform dispatch function with each middleware.
    middlewares.forEach(middleware =>
      store.dispatch = middleware(store)
    )
  }
  
  applyMiddlewareByMonkeypatching(store, [logger, crashReporter])