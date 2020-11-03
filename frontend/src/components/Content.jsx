import { Switch, Route } from 'react-router-dom'
import CatGrid from './CatGrid'
import PostGrid from './PostGrid'

export default function Content({ items, isLoading }) {
    return (
    <Switch>
        <Route exact path='/cats' component={CatGrid}/>
        <Route path='/posts' component={PostGrid}/>
        <Route path='/about-us' component={CatGrid}/>
    </Switch>
    )
}