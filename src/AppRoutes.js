import React from 'react';


export const AppRoutes = () => {
    return (
        <Switch>
        <Route exact path='/' component={IndexPage}/>
        <Route path='/home' component={HomePage}/>
        <Route path='/:term' component={ResultsPage}/>
      </Switch>

    )
}