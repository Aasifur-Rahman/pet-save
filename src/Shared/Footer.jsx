import lightlogo from "../assets/Logo/Pet save logo.png";
import logo from "../assets/Logo/Pet save logo light.png";

import useTheme from "../hooks/useTheme";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Footer = () => {
  const { theme } = useTheme();


  const sendNewsLetter = (e) => {
    e.preventDefault()

   const email = e.target.email.value 
    
   if(email){
    Swal.fire({
  title: "Thank you!",
  text: " for subscription",
  icon: "success"
  
} 
 
);
   } 
  }

  return (
    <div>
      <footer className="footer bg-primary   text-secondary p-10">
        <div className="flex justify-between w-full mx-auto">
          <aside>
            {theme === "myDarkTheme" ? (
              <img className="w-32" src={lightlogo} alt="" />
            ) : (
              <img className="w-32" src={logo} alt="" />
            )}
        
              <p>
              Pet Save Ltd.
              <br />
              Providing reliable <br/> pet rescue and shelters  since 2021
            </p>
            
          </aside>
          <div>
  <h3 className="font-bold mb-2">Stay Updated</h3>
  <form onSubmit={sendNewsLetter} >
    <input name="email" type="email" placeholder="Your email" className="input input-bordered w-full max-w-xs mb-2 text-primary" />
  <button  className="btn btn-sm btn-primary"><input type="submit" value="Subscribe" /></button>
  </form>
</div>
          <div>
            
        
  <h3 className="font-bold mb-2">Quick Links</h3>
  <ul className="space-y-4">
    <li><Link href="/about" className="link link-hover">About Us</Link></li>
    <li><Link href="/adopt" className="link link-hover">Adopt a Pet</Link></li>
    <li><Link href="/donate" className="link link-hover">Donate</Link></li>
    <li><Link href="/contact" className="link link-hover">Contact</Link></li>
  </ul>


          </div>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              
            </div>
            <div>
  <h3 className="font-bold mb-2 mt-5">Contact</h3>
  <p>Email: info@petsave.org</p>
  <p>Phone: +880 123-456-789</p>
  <p>Location: Dhaka, Bangladesh</p>
</div>

          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
