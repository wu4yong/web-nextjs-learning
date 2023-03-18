import React, { useState } from 'react';
import { useRouter } from "next/router";

const Events = ({ eventList }) => {

    const router = useRouter();
    const [events, setEvents] = useState(eventList);
    const fetchSportsEvent = async () => {
        //过滤出category为sports的event
        const res = await fetch(`http://localhost:4000/events?category=sports`);
        const events = await res.json();
        setEvents(events);
        //虽然说是跳转了路由,但是此时你并没有真正的跳转,而是把路由的参数改变了(不会运行getServerProps里的代码)
        router.push('/events?category=sports', undefined, { shallow: true });
    }

    return (
        <>
          <button onClick={fetchSportsEvent}>Sports events</button>
          <h1>List of events</h1>
            {
                events.map(e => (
                    <div key={e.id}>
                        <h2>{e.id} -- {e.title} -- {e.date} | {e.category}</h2>
                        <p>{e.description}</p>
                        <hr/>
                    </div>
                ))
            }
        </>
    );
};


//SSR
export async function getServerSideProps(context){
    const { query } = context;
    const queryString = query.category ? 'category=sports' : '';
    const res = await fetch(`http://localhost:4000/events?${queryString}`);
    const events = await res.json();
    return {
        props: {
            eventList: events
        }
    }
}

export default Events;
