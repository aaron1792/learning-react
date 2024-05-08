import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


export function App (){

    return(
<section className="App">

<TwitterFollowCard isFollowing={false} userName="midudev"  >
    Miguel Angel Duran
    </TwitterFollowCard>
      <TwitterFollowCard isFollowing userName="pheralb"   >
        Pablo Hernandez
        </TwitterFollowCard>
      <TwitterFollowCard isFollowing  userName="elonmusk"   >
        Elon Musk
        </TwitterFollowCard>
      <TwitterFollowCard isFollowing  userName="vxnder" >
        vanderhart
        </TwitterFollowCard>
</section>
      
    )
}