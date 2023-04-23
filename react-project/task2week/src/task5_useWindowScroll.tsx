import { useWindowScroll } from './useWindowScroll';

function Demo5() {
    const [scroll, scrollTo] = useWindowScroll();


    return (
        <div className='pb task2'>
            <h1>Задание #5</h1>
            <p>
                Scroll position x: {scroll.x}, y: {scroll.y}
            </p>
            <button onClick={() => scrollTo({ y: 0 })}>
                Scroll to top
            </button>
        </div>
    );
}

export default Demo5
