import './Footer.css'

export const Footer = () => {
  const actualYear = new Date().getFullYear()
  return (
    <div className='footer'>
      <p> {`${actualYear}`}&#174; </p>
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
