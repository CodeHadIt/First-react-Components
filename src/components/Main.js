import React from 'react'

const Main = () => {
    return (
        <main>
            <h1>Kenneth Okini</h1>
            <h4>FrontEnd Developer</h4>
            <p>codehadit.dev</p>
            <div className='btns'>
                <a href="mailto:okinikenneth@gmail.com" id='email-btn' className='btn'><i class="fa-solid fa-envelope"></i>Email</a>
                <a href="https://linkedin.com/kenneth-okini" id='linkedin-btn' className='btn' ><i class="fa-brands fa-linkedin"></i>Linkedin</a>
            </div>

            <div className='text-contain'>
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laborum alias quaerat quia! Similique nobis nihil facere quidem voluptate porro impedit blanditiis ea et. Consequuntur corrupti natus quaerat molestiae ipsum!</p>
            </div>
            <div className='text-contain'>
                <h2>Interests</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laborum alias quaerat quia! Similique nobis nihil facere quidem voluptate porro impedit blanditiis ea et.</p>
            </div>
        </main>
    )
}

export default Main