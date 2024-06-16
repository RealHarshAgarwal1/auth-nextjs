
export default function UserProfile({params}:any) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <hr />
        <p className="text-2xl">This is the profile page : <span className="font-bold bg bg-red-800 p-2 rounded-md">{params.id}</span></p>
      </div>
    )
  }
  
  