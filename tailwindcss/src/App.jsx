
import './App.css'

function App() {

  return (
  <div className='main scroll-smooth'>
  <div className="main bg-slate-800 text-6xl text-white flex justify-center space-x-0 hover:bg-green-200 transition-duration-150 ">
    <span className='sub1 bg-yellow-400  hover:text-green-200 max-w-40 animate-bounce rounded-s-full m-7 p-7 hover:skew-y-12 hover:transform-origin-top-left shadow-[1px_1px_15px_1px_gold] opacity-100 hover:transition-duration-150'>sub1</span>
    <span className='sub2 bg-cyan-900  hover:text-yellow-400 mt-10 rounded-e-full p-5 m-10 hover:rotate-45 hover:scale-x-110 hover:translate-y-10  border-solid border-e-8 border-silver-400'>sub2 </span>
  </div>
  <div className="main1 mt-10 mx-10 grid grid-cols-3 divide-x outline-yellow-950 hover:bg-rose-800 divide-fuchsia-500 block  mx-auto rounded-lg p-6 bg-rose-500 ring-1 ring-slate-900/5 bg-sky-500 hover:ring-sky-500 divide-double outline-8 ">
    <span className='sub11 border-double flex justify-center pt-1 hover:bg-red-100 hover:rounded-t-full border-y-4 border-gray-800 hover:scale-110 bg-gray-300 h-10 w-40  delay-150 duration-10 ease-in-out ... '>sub1</span>
    <span className='sub22 border-3 flex justify-center hover:text-black-900 text-red-600 hover:bg-blue-600 hover:text-white animate-spin hover:ounded-bl-full  hover:rounded-b-full border-gray-700 bg-cyan-200 w-20'>sub2</span>
    <span className='sub33 focus:ring-2 ring-2 ring-red-900 ring-offset-4 mt-2 pt-1 ring-offset-green-500 hover:skew-y-12  flex justify-center'>sub3</span>
  </div>
  <div className="main2 outline-rose-900 hover:outline-gray-900 hover:ring-offset-blue-500 ring-offset-4 outline-offset-4 outline w-90 hover:mx-10 flex bg-green-600 rounded-full hover:scale-110 divide-double  flex-col hover:divide-y-8 divide-gray-200  mt-3 mx-5 hover:transition delay-150  duration-300 ease-in-out ... hover:bg-red-800">
    <span className='sub111 justify-center  flex hover:animate-bounce '>sub1</span>
    <span className='sub222 justify-center flex hover:animate-bounce '>sub2</span>
    <span className='sub333 hover:text-white  w-30 hover:animate-bounce justify-center flex'>sub3</span>
  </div><br />
  <br />
  <br />
  <table className='md:ml-10 md:w-50 lg:w-80 ml-80 hover:table-fixed table-auto select-none  border-collapse border-spacing-x-3 border-spacing-y-4 hover:border-separate border border-red-500'>
    <caption className=' hover:caption-bottom'>
      <p>this table is created for student details</p>
    </caption>
    <thead>
      <tr>
        <th className=' border border-yellow-400'>name</th>
        <th className=' border border-yellow-400'>class</th>
        <th className=' border border-yellow-400'>roll no</th>
        <th className=' border border-yellow-400'>check-box</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className='border border-green-600'>amal krishna a.n</td>
        <td className='border border-green-600'>bca</td>
        <td className='border border-green-600'>11</td>
        <td className='border border-green-600'><input type="checkbox" className='accent-transparent hover:accent-red-700' checked /></td>
      </tr>
      <tr>
        <td className='border border-blue-700'>sanu</td>
        <td className='border border-blue-700'>finance</td>
        <td className='border border-blue-700'>22</td>
        <td className='border border-blue-700'><select className='appearance-auto' name="opt" id="opt"><option value="yes">yes</option><option value="no">no</option></select></td>
      </tr>
      <tr>
        <td className='border border-gray-700'>manu</td>
        <td className='border border-gray-700'>ba</td>
        <td className='border border-gray-700'>33</td>
        <td className='border border-gray-700'><button className='cursor-progress'>submit</button></td>
      </tr>
      
      <tr>
        <td className='border border-gray-700'>sanal</td>
        <td className='border border-gray-700'>bba</td>
        <td className='border border-gray-700'>44</td>
        <td className='border border-gray-700'><button className='cursor-not-allowed'>submit</button></td>
      </tr>
      
      <tr>
        <td className='border border-gray-700'>ramu</td>
        <td className='border border-gray-700'>ma</td>
        <td className='border border-gray-700'>55</td>
        <td className='border border-gray-700'><button className='cursor-vertical-text'>submit</button></td>
      </tr>

      <tr>
        <td className='border border-gray-700'>manu</td>
        <td className='border border-gray-700'>ba</td>
        <td className='border border-gray-700'>33</td>
        <td className='border border-gray-700'><button className='cursor-zoom-in'>submit</button></td>
      </tr>
    </tbody>
  </table>
  <form>
    <input type="text" className=' select-all caret-pink-500 hover:caret-purple-700 resize ml-10'/>
    <button className='cursor-not-allowed'>submit</button><br />
    <br /><br />
  </form>

 </div>
  )
}

export default App
