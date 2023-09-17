import { Toaster } from 'react-hot-toast'

const CustomToaster: React.FC = (): JSX.Element => {
  return (
    <Toaster
      toastOptions={{
        success: {
          style: {
            background: '#008800',
            color: 'white',
          },
        },
        error: {
          style: {
            background: '#b00000',
            color: 'white',
          },
        },
      }}
    />
  )
}

export default CustomToaster
