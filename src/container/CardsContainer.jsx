import { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import { fetchUsersData } from '../actions/index';

function CardsContainer(props) {

    const { hasMore, usersData, reducerFuncFetchUsersData } = props;
    let offset = 0;

    const loadMore = async () => {
        // Checking if the scroll reached to bottom
        if ((window.innerHeight + document.documentElement.scrollTop + 1 >= document.scrollingElement.scrollHeight) && hasMore) {
            offset = offset + 10;
            await reducerFuncFetchUsersData(offset);
        }
    };

    useEffect(() => {
        // Added scroll event listener in the when component is mounting 
        window.addEventListener('scroll', loadMore);
        reducerFuncFetchUsersData(offset);
        return () => {
            // Removed the event listener when the component will get unmounted
            window.removeEventListener('scroll', loadMore);
        }
    }, []);

    return (
        <div>
            {
                usersData.map((userObj) => {
                    return (
                        <Card
                            title={userObj.title}
                            body={userObj.body}
                            key={userObj.id}
                        />
                    )
                })
            }
        </div>
    )
}


const mapDispatchToProps = {
    reducerFuncFetchUsersData: fetchUsersData,
  }
  
  const mapStateToProps = state => ({
    usersData: state.projects.usersData,
    hasMore: state.projects.hasMore,
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
