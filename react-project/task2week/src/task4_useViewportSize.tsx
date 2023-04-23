import { useViewportSize } from './useViewportSize';

function Demo4() {
    const { height, width } = useViewportSize();

    return (
        <div className='pb task4'>
            <h1>Задание #4</h1>
            Width: {width}, height: {height}
        </div>
    );
}

export default Demo4
