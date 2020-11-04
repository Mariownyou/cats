import { Switch, Route } from 'react-router-dom'
import CatGrid from '../cats/CatGrid'
import PostGrid from '../posts/PostGrid'
import GroupGrid from '../posts/GroupGrid'

export default function Content() {
    return (
    <Switch>
        <Route exact path='/cats' component={CatGrid}/>
        <Route path='/groups' component={GroupGrid}/>
        <Route exact path='/posts' component={PostGrid}/>
        <Route path='/about-us' component={PostGrid}/>
        <Route path='/posts/:group' component={PostGrid}/>
    </Switch>
    )
}