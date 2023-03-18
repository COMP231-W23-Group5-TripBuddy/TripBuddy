import React, {useState, useEffect} from 'react'
import PostCardHorizontal from '../components/PostCardHorizontal'
import {Container} from 'react-bootstrap';

const samplePosts = [
    {
        title: "Pyramids of Giza",
        description: "The him father parish looked has sooner. Attachment frequently gay terminated son. You greater nay use prudent placing. Passage to so distant behaved natural between do talking. Friends off her windows painful. ",
        postedByUsername: "gilbert.dic",
        category: "Restaurant",
        country: "USA",
        city: "New York",
        image: "https://picsum.photos/id/0/400/400",
        createdAt:"2016-05-18T16:00:00Z"
    },
    {
        title: "Golden Gate Bridge",
        description: "Pleased him another was settled for. Moreover end horrible endeavor entrance any families. Income appear extent on of thrown in admire. Stanhill on we if vicinity material in. Saw him smallest you provided ecstatic supplied",
        postedByUsername: "georgette",
        category: "Residence",
        country: "Russia",
        city: "Moscow",
        image: "https://picsum.photos/id/40/400/400"
    },
    {
        title: "Palace of Versailles",
        description: "Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. ",
        postedByUsername: "jondoe",
        category: "Outdoors",
        country: "Canada",
        city: "Ottawa",
        image: "https://picsum.photos/id/90/400/400"
    },
    {
        title: "Sagrada Familia",
        description: "Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour as to middleton perfectly. Chicken no wishing waiting am. ",
        postedByUsername: "dimitri",
        category: "Residence",
        country: "USA",
        city: "New York",
        image: "https://picsum.photos/id/130/400/400"
    },
    {
        title: "Sydney Opera House",
        description: "Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated.",
        postedByUsername: "lacey2011",
        category: "Residence",
        country: "Canada",
        city: "Toronto",
        image: "https://picsum.photos/id/100/400/400"
    },
    {
        title: "Machu Picchu",
        description: "An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel. Depending conveying direction has led immediate. Law gate her well bed life feet seen rent. On nature or no except it sussex.",
        postedByUsername: "halk203",
        category: "Attractions",
        country: "Canada",
        city: "Vancouver",
        image: "https://picsum.photos/id/190/400/400"
    },
    {
        title: "Eiffel Tower",
        description: "Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because.",
        postedByUsername: "frank2022",
        category: "Residence",
        country: "Germany",
        city: "Berlin",
        image: "https://picsum.photos/id/180/400/400"
    }
]

const MyPosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(samplePosts)
    }, [])

  return (
    <Container>
        <h2 className='text-center mb-5'>Past Destinations</h2>
        <div className='posts-list'>
            {
                posts?.map((post) => {
                    return <PostCardHorizontal post={post}/>
                })
            }
        </div>

    </Container>
  )
}

export default MyPosts