import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

const users = [
{
    name: 'Ramses',
    userName: 'lRamses07',
    initialIsFollowing: false
},
{
    name: 'La Fernanda',
    userName: 'bubo',
    initialIsFollowing: true
},
{
    name: 'Aron',
    userName: 'pitiko',
    initialIsFollowing: false
},
{
    name: 'Vladimir Putin',
    userName: 'Putin',
    initialIsFollowing: true
}]

export function App () {

    //const formatUserName = (userName) => `@${userName}` //se puede mandar la funcion como prop
    //const fer = {name: 'La Fernanda', userName: 'bubo', initialIsFollowing: true}
    return(
    <section className = 'App'>
        
        {users.map(({name, userName, initialIsFollowing}) => {
            
            return(
                <TwitterFollowCard 
                    key = {userName}
                    userName = {userName}
                    initialIsFollowing={initialIsFollowing}
                >
                    {name}
                </TwitterFollowCard>
            )
        })
        }
        
    </section>
   )

}