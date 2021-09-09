const Post = () => {
    return(
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/autoz.jpg"></img>
            <span className='font-semibold text-lg'>Ukrit Kosonsomboon 630610772</span>
          </div>

          {/* status message */}
          <p>Quiz ยากจังเลยครับ Error อะไรไม่รู้ ลบเขียนใหม่แต่แรกมันได้เฉยทั้งๆที่ก็เขียนเหมือนกันหมด TT</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-500'>480000000 คน</p>
          </div>

        </div>
    )
}

export default Post