import logo from './logo.svg';
import './App.css';
import{useState}from 'react';

function App() {

  const [formData,setformData]=useState({firstname:"",lastname:"",email:"",country:"India",streetAddress:"",City:"",State:"",ZIP:"",byEmail1:false,byEmail2:false,byEmail3:false,Push:""});
  console.log(formData);
  function changeHandler(event){
    const{name,value,checked,type}=event.target
    setformData(prevformData=>{
      return {...prevformData,
        [name]:type==="checkbox"?checked:value
      }
    }

    );
  }

  function SubmitHandler(event){
    event.preventDefault();
    console.log(formData);

  }
  return (
    <div className="App">
      <form id="Full_Form" onSubmit={SubmitHandler}>
              <label className='Heading' htmlFor="firstname">Firstname</label>
              <br></br>
              
              <input className='InputField'
              type="text"
              onChange={changeHandler}
              name="firstname"
              value={formData.firstname}
              
              />
              
              
              <br></br>
              <label className='Heading' htmlFor="lastname">Lastname</label>
              <br></br>
              <input className='InputField'
              type="text"
              onChange={changeHandler}
              name="lastname"
              value={formData.lastname}
              
              />
              <br></br>

            <label className='Heading' htmlFor="email">Email address</label>
              <br></br>
              <input className='InputField'
              type="text"
              onChange={changeHandler}
              name="email"
              value={formData.email}
              
              />
              <br></br>
              

              <label className='Heading' htmlFor="country">Country</label>
              <br></br>
              
              <select className='InputField'
                id="country"
                type="text"
                onChange={changeHandler}
                name="country"
                value={formData.country}
                

              >
              <option value="india">India</option>
              <option value="America">America</option>
              <option value="Kannada">Kannada</option>
              <option value="SouthAfrica">SouthAfrica</option>
              </select>
              <br></br>


              <label className='Heading' htmlFor="street address">Street address</label>
              <br></br>
              <input className='InputField'
              type="text"
              onChange={changeHandler}
              name="streetAddress"
              value={formData.streetAddress}
              />

        <br></br>
              

        <label className='Heading' htmlFor="City">City</label>
              <br></br>
              <input className='InputField'
              type="text"
              onChange={changeHandler}
              name="City"
              value={formData.City}
              />

        <br></br>

        <label  className='Heading' htmlFor="State">State/province</label>
              <br></br>
              <input className='InputField'
              type="text"
              onChange={changeHandler}
              name="State"
              value={formData.State}
              />

        <br></br>

        <label className='Heading'  htmlFor="ZIP">ZIP/Postal Code</label>
              <br></br>
              <input className='InputField'
              type="number"
              onChange={changeHandler}
              name="ZIP"
              value={formData.ZIP}
              />

        <br></br>

        <label className='Heading' htmlFor="byEmail">By email</label>
              <br></br>
              <br></br>
              <input 
              type="checkbox" 
              onChange={changeHandler}
              name="byEmail1"
              id="byEmail1"
              
             
              checked={formData.byEmail1}
              />
              <label className='Heading' htmlFor="byEmail">Comments</label>
              <p>Get notified when someone posts a comment  on a posting</p>


              
              <input 
              type="checkbox" 
              onChange={changeHandler}
              name="byEmail2"
              id="byEmail2"
              
              checked={formData.byEmail2}
              />
              <label className='Heading' htmlFor="byEmail">Candidates</label>
              <p>Get notified when a candidate applies for a job</p>
              
              


              
              <input
              type="checkbox" 
              onChange={changeHandler}
              name="byEmail3"
              id="byEmail3"
             
              checked={formData.byEmail3}
              />
              <label className='Heading' htmlFor="byEmail">Offers</label>
              <p>Get notified when a candidate accepts or reject an offer</p>
              <br></br>


              {/* push notification */}
        <p className='Heading' >Push notification</p>
              
              <p> There are delivered via sms to your mobile phone</p>
              <br></br>
              <input 
              type="radio" 
              onChange={changeHandler}
              name="Push"
              id="Everything"
              value="Everything"
              checked={formData.Push==="Everything"}
              />
              <label  className='Heading' htmlFor="Everything">Everything</label>
            <br></br>

              
              <input
              type="radio" 
              onChange={changeHandler}
              name="Push"
              id="Same as email"
              value="Same as email"
              checked={formData.Push==="Same as email"}
              />
              <label className='Heading' htmlFor="Same as email">Same as email</label>
              <br></br>


              <input
              type="radio" 
              onChange={changeHandler}
              name="Push"
              id="No push Notification"
              value="No push Notification"
              checked={formData.Push==="No push Notification"}
              />
              <label className='Heading' htmlFor="No push Notification">No push Notification</label>
              
              <br></br>
              <br></br>
              <button className='Button'>Save</button>

          

        
      </form>
      
    </div>

  );
}

export default App;
