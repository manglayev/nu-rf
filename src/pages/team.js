import React from 'react'
import Layout from '@theme/Layout'
import '../css/team.css';

import img1 from '../../static/team/img1.jpg'
import img2 from '../../static/team/img2.jpg'
import img3 from '../../static/team/img3.jpg'

import Husain_Saddam from '../../static/team/Husain_Saddam.jpg'
import Kadirbay_Baglan from '../../static/team/Bagylan_Kadirbay.jpg'
import Karimov_Adil from '../../static/team/Karimov_Adil.jpg'
import KD from '../../static/team/KD.jpg'
import Khan_Kashif from '../../static/team/Khan_Kashif.jpg'
import Kudaibergenova_Zhanel from '../../static/team/Zhanel_Kudaibergenova.jpg'
import Murat_Anel from '../../static/team/Murat_Anel.jpg'
import Nurgali_Raiymbek from '../../static/team/Nurgali_Raiymbek.jpg'
import Bakytbekov_Azamat from '../../static/team/Bakytbekov_Azamat.jpg'
import Jawad_Ahmad from '../../static/team/Jawad_Ahmad.jpg'
import Rauan_Ibragim from '../../static/team/Rauan_Ibragim.jpg'
import Yerassyl_Sabyrov from '../../static/team/Yerassyl_Sabyrov.jpg'
import Mohammad_Hashmi from '../../static/team/Hashmi_Mohammad.jpg'


function Team()
{
  return(    
        <Layout>
            <h1>Meet the Nazarbayev University RF Research Team</h1>
            <div className="topnav"><h1>PI</h1></div>
            <div className="row">
                <div className="column" style={{display: "block", marginLeft: "auto", marginRight: "auto",}}>
                    <div className="card">
                    <img src={Mohammad_Hashmi} alt="John" className="photo" />
                    <div className="container">
                        <h2>Mohammad Hashmi</h2>
                        <p>(Senior Member, IEEE) received the B.Tech. degree from Aligarh Muslim University, 
                            India, the M.S. degree from the Darmstadt University of Technology, Germany, and the 
                            Ph.D. degree from Cardiff University, Cardiff, U.K. He had held research, engineering, 
                            and academic positions with the University of Calgary, Canada; Cardiff University; 
                            Thales Electronics GmbH, Germany; Philips Technology Center, Germany; and IIIT Delhi, India. 
                            He is currently an Associate Professor with Nazarbayev University, Kazakhstan. 
                            His research activities have led to one book, three U.S. patents (two pending), and over 
                            250 journals and conference publications. His current research interests include the domain 
                            of advanced RF circuits for wireless applications (including wireless power transfer and 
                            energy harvesting), emerging RF circuits and applications, broadband linear and efficient 
                            power amplifiers for mobile and satellite applications, and high- and low-frequency 
                            instrumentation. He is an Associate Editor of IEEE Microwave Magazine.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="topnav"><h1>PostDoctoral Fellows</h1></div>
            <div className="row">
                <div className="column">
                    <div className="card">
                    <img src={KD} alt="Kasen" className="photo" />
                    <div className="container">
                        <h2>Dr. KASSEN DAUTOV</h2>
                        <p>received the B.Sc. degree (Hons.) in radio engineering, electronics, and
                            telecommunications from Kazakh National Research Technical University (named after K. I.
                            Satpayev), Almaty, Kazakhstan, in 2009, the M.Sc. degree in electronics engineering from the
                            Bremen University of Applied Sciences, Bremen, Germany, in 2015, and the Ph.D. degree in
                            science, engineering, and technology from Nazarbayev University, Astana, Kazakhstan, in 2023.
                            He is currently a Postdoctoral Research Fellow with the School of Engineering and Digital
                            Sciences, Nazarbayev University. His research interests include broad areas of antenna and
                            high-frequency circuit design, with a particular focus on wireless power transfer systems,
                            energy harvesting, metamaterials, and the antennas utilized in wireless body area networks.</p>                        
                    </div>
                    </div>
                </div>
            </div>
            <div className="topnav"><h1>Research Assistants – PhD Students</h1></div>
            <div className="row">
                <div className="column">
                    <div className="card">
                    <img src={Husain_Saddam} alt="Saddam" className="photo" />
                    <div className="container">
                        <h2>SADDAM HUSAIN</h2>
                        <p>received the B.Tech. degree from the Galgotias College of
                            Engineering and Technology, Noida, India, in 2016, and the M.Tech. degree from
                            Jamia Millia Islamia, New Delhi, India, in 2019. He is currently pursuing the Ph.D.
                            degree in electrical engineering from Nazarbayev University, Astana, Kazakhstan.
                            He held research positions with the High Speed Electronics Laboratory, IIIT Delhi,
                            India, and the Research Institute of Sciences and Engineering (RISE), University of
                            Sharjah, United Arab Emirates. His research interests include machine learning-
                            based modeling and optimization, measurement, characterization, and modeling of
                            RF/Microwave devices, and power amplifier design.</p>                        
                    </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <img src={Jawad_Ahmad} alt="Jawad" className="photo" />
                    <div className="container">
                        <h2>JAWAD AHMAD</h2>
                        <p>is currently pursuing PhD in the Department of Electrical Engineering at the Nazarbayev
                            university’s school of engineering and digital sciences. His academic journey began with a Bachelor of
                            Science in 2017, followed by a Master of Science in 2020, both from the International Islamic University,
                            Islamabad, Pakistan. His research focuses on cutting-edge areas within electrical engineering,
                            particularly specializing in wearable antennas for wireless body area networks. He is deeply intrigued by
                            the potential of mm-wave band MIMO antennas and metamaterial-based antennas for transformative
                            applications in the medical field.</p>
                    </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <img src={Karimov_Adil} alt="Adil" className="photo" />
                    <div className="container">
                        <h2>ADIL KARIMOV</h2>
                        <p>is currently pursuing a Ph.D. degree in electrical engineering
                            at Nazarbayev University. In 2022, he graduated with an MSc degree in
                            electromagnetics and microwave engineering at the University of Alberta,
                            Edmonton, AB, Canada. Since 2020, he has been designing a high-power
                            Gaussian pulse transmitter for sensing and imaging buried objects. His
                            current research interests include designing and developing ultra-wideband
                            (UWB) technology, including high-power power amplifiers for different 5G, IoT,
                            radar systems, and MMwave imaging applications. He received the Bolashak
                            International Scholarship, awarded to high-performing students from
                            Kazakhstan to study overseas, in 2019.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="topnav"><h1>Research Assistants</h1></div>
            <div className="row">
                <div className="column" style={{display: "block", marginLeft: "auto", marginRight: "auto",}}>
                    <div className="card">
                    <img src={Khan_Kashif} alt="Kashif" className="photo" />
                    <div className="container">
                        <h2>KASHIF KHAN</h2>
                        <p>obtained his Bachelor degree in Electrical Engineering from the University of
                            Engineering and Technology (UET) in Peshawar, Pakistan, in 2019. Driven by his passion for
                            advanced education, he pursued his master&#39;s in Electrical and Computer Engineering at
                            Nazarbayev University (NU) in Astana, Kazakhstan. Upon successful completion of his MSc in
                            2023, he transitioned into the role of a Research Assistant (RA) at NU, focusing on exploring
                            novel machine learning techniques for analyzing the behavior of Gallium Nitride High Electron
                            Mobility Transistors. So far, he has authored three papers presented at highly esteemed IEEE
                            conferences, earning two Best Paper Awards for his outstanding contributions.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="topnav"><h1>Research Assistants MSc Students</h1></div>
            <div className="row">
                <div className="column">
                    <div className="card">
                    <img src={Kudaibergenova_Zhanel} alt="Zhanel" className="photo" />
                    <div className="container">
                        <h2>ZHANEL KUDAIBERGENOVA</h2>
                        <p>received the B.Sc. degree in 2022 and is currently pursuing the M.Sc. in
                            Electrical and Computer Engineering at Nazarbayev University, Astana, Kazakhstan. Her main research
                            area focuses on wireless power transfer systems, particularly developed on defected ground structure
                            approach. Furthermore, her research interest also includes artificially engineered metamaterial slabs
                            used for performance optimization strategies.</p>
                    </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <img src={Kadirbay_Baglan} alt="Bagylan" className="photo" />
                    <div className="container">
                        <h2>BAGYLAN KADIRBAY</h2>
                        <p>is a second-year MSc Student of Science in Electrical And Computer
                            Engineering at Nazarbayev University. His research interests include Small-Signal modeling of
                            Gallium Nitride High Electron Mobility Transistors using Machine Learnig algorithms.</p>
                    </div>
                    </div>
                </div>                
            </div>
            <div className="topnav"><h1>Research Assistants BSc Students</h1></div>
            <div className="row">
                <div className="column">
                    <div className="card">
                    <img src={Murat_Anel} alt="Anel" className="photo" />
                    <div className="container">
                    <h2>ANEL MURAT</h2>
                    <p>is a third-year Electrical and Computer Engineering student at
                        Nazarbayev University, expecting to graduate in 2025. Her current research interests
                        are centered around the application of electrical engineering principles in biomedicine,
                        with a focus on wireless power and data transfer using RF circuits for brain implants and
                        biosensors.</p>
                </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                <img src={Nurgali_Raiymbek} alt="Raiymbek" className="photo" />
                <div className="container">
                    <h2>RAIYMBEK NURGALI</h2>
                    <p>is a 3rd-year Undergraduate student in
                        Electrical and Computer Engineering at Nazarbayev University. His research interests
                        are Antenna and RF Techniques, Communication Systems.</p>
                </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                <img src={Rauan_Ibragim} alt="Raiymbek" className="photo" />
                <div className="container">
                    <h2>RAUAN IBRAGIM</h2>
                    <p>is a third-year Electrical and Computer Engineering student at Nazarbayev
                    University, expecting to graduate in 2025. His research interests include ML and AI for
                    modeling and optimization of electronic circuits.</p>
                </div>
                </div>
            </div>
            <div className="column" style={{display: "block", marginLeft: "auto", marginRight: "auto",}}>
                <div className="card">
                <img src={Yerassyl_Sabyrov} alt="Raiymbek" className="photo" />
                <div className="container">
                    <h2>YERASSYL SABYROV</h2>
                    <p>is a third-year Electrical and Computer Engineering student at
                    Nazarbayev University, expecting to graduate in 2025. His research interests are Energy
                    Harvesting and Wireless Power Transfer systems.</p>
                </div>
                </div>
            </div>
        </div>
        <div className="topnav"><h1>Former team members</h1></div>
        <div className="row">
            <div className="column" style={{display: "block", marginLeft: "auto", marginRight: "auto",}}>
                <div className="card">                
                <div className="container">
                    <h2>Dr. Azamat Bakytbekov</h2>
                    <h2>Research Assistant, UG students</h2>
                    <h2>Zere Iman</h2>
                    <h2>Abzal Aidakhmetov</h2>
                    <h2>Dauren Yedres</h2>
                </div>
                </div>                
            </div>
        </div>    
    </Layout>
  );
}

export default Team;