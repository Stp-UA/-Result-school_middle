import { useFetch } from './useFetch'

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

const URL_OPT = {
    _limit: 3
}
console.log(JSON.stringify(URL_OPT))
const URL_POSTS: string = 'https://jsonplaceholder.typicode.com/posts';

function Demo() {
    console.log('========= Demo ==========')

    const request = useFetch<Post[]>(URL_POSTS, URL_OPT);
    console.log(request)

    return (
        <div>
            <h1>Задание #1</h1>
            <div>
                <button onClick={() => request.refetch({
                    params: {
                        _limit: 3
                    }
                })}>
                    Перезапросить
                </button>
            </div>
            {request.isLoading && 'Загрузка...'}
            {request.error && 'Произошла ошибка'}
            {request.data && !request.isLoading  && request.data.map(item => <div key={item.id}>{item.title}</div>)}
        </div>
    )
}

export default Demo
