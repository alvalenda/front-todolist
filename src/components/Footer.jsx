import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <p> 2022&#174; </p>
      <a href={'http://github.com/alvalenda'} target='_blank' rel='noreferrer'>
        <p>
          alva.code {`<`}
          <span>/</span>
          {`>`}
        </p>
      </a>
    </div>
  )
}
