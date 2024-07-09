import React from 'react'
import { FaUserLarge } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Navbar({authenticate, setAuthenticate}) {
    const menuList=[
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Hone",
        "Sale",
        "지속가능성",
  ];

  const navigate = useNavigate();
  const gotoLogin=()=>{
    navigate("/login");
  };
  const gotoMain=()=>{
    navigate("/");
  };

  const search=(event)=>{
    if(event.key == "Enter"){
      let keyword=event.target.value;
      console.log(keyword)
      navigate(`/?q=${keyword}`)
    }
  }
  return (
    <div>
      <div className="login-button" onClick={gotoLogin}>
        <FaUserLarge />
        {authenticate?(
            <span onClick={()=>setAuthenticate(false)}>로그아웃</span>
          ):(
            <span>로그인</span>
          )
        }

      </div>
      <div className="nav-section" onClick={gotoMain}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1280px-Zara_Logo.svg.png" alt="" width={100} />
      </div>

      <div className="menu_list">
        <ul>
            {menuList.map((item,index)=>{
                return <li key={index}>{item}</li>;
            })}
        </ul>
        <div className="input">
          <IoSearchSharp />
          <input type="text" onKeyDown={search} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
