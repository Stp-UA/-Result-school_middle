import { useHover } from './useHover';

function Demo3() {
  const { hovered, ref } = useHover();

  return (
    <div className='pb task3'>
      <h1>Задание #3</h1>
      <div className='hover' ref={ref}>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </div>
    </div>
  );
}

export default Demo3
