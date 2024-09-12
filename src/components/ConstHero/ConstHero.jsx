import './ConstHero.css'

const ConstHero = ({ dataHero }) => {
    return (
    <div className='ConstHero-container'>
        <p className='ConstHero-p'>{dataHero.content}</p>
        <h2 className='ConstHero-h2'>{dataHero.title}</h2>
    </div>
    );
  };
  
  export default ConstHero;
