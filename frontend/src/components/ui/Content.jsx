import { Switch, Route } from 'react-router-dom'
import CatGrid from '../cats/CatGrid'
import PostGrid from '../posts/PostGrid'

export default function Content() {
    return (
    <Switch>
        <Route exact path='/cats' component={CatGrid}/>
        <Route path='/posts' component={PostGrid}/>
        <Route path='/about-us' component={CatGrid}/>
    </Switch>
    )
}