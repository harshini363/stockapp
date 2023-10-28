import '@styles/globals.css'
import Nav from '@components/Nav';
export const metadata={
  title:"GrowwStonks",
  description: 'A stocks/etfs broking website'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>
        <main className='app ' style={{paddingLeft:0+'em',paddingRight:0+'em'}}>
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout