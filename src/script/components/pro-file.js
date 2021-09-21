class Profile extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                pro-file {
                    display: block;
                    padding: 30px;
                    margin: 20px 5px 20px 5px;
                    backdrop-filter: blur(16px) saturate(180%);
                    -webkit-backdrop-filter: blur(16px) saturate(180%);
                    color : #9ca3af;
                    background-color: rgba(17, 25, 40, 0.75);
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.125);
                }
                
                .ava img {
                    vertical-align: middle;
                    width: 150px;
                    height: 150px;
                    border: 1px solid rgba(255, 255, 255, 0.125);
                    border-radius: 150px;
                    padding: 15px;
                    margin-bottom: 20px;
                }

                .profile-desc {
                    padding-top: 15px;
                }

                .profile-desc h1 {
                    font-size: 24px;
                    margin: 0;
                    color: #ffff;
                }

                .profile-desc p {
                  color: #ffff;
                }

                .profile-skill {
                    padding-top: 15px;
                }

                .skill-list {
                    flex: 1 100px;
                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
                    justify-content: space-around;
                    padding-top: 15px;
                }

                .skill-item {
                    flex: 1 auto;
                    padding: 10px;
                    margin: 3px;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.125);
                }
                
                .skill-item img {
                    max-width: 70px;
                }
            </style>

            <section class="ava">
                <img src="./public/images/nfathan.jpg">
            </section>
            <section class="profile-desc bt">
                <h1>Hey..<br> I'm Fathan Nasrullah</h1>
                <p>Front-End Web Developer</p>
            </section>
            <section class="profile-skill bt">
                <h3>Skill</h3>
                <div class="skill-list">
                    <div class="skill-item">
                        <img src="./public/images/html.png" alt="html">
                    </div>
                    <div class="skill-item">
                        <img src="./public/images/css.png" alt="css">
                    </div>
                    <div class="skill-item">
                        <img src="./public/images/js.png" alt="javascript">
                    </div>
                    <div class="skill-item">
                        <img src="./public/images/webpack.png" alt="webpack">
                    </div>
                    <div class="skill-item">
                        <img src="./public/images/bootstrap.png" alt="bootstrap">
                    </div>
                    <div class="skill-item">
                        <img src="./public/images/sass.png" alt="sass">
                    </div>
                    <div class="skill-item">
                        <img src="./public/images/react.png" alt="react-js">
                    </div>
                    <div class="skill-item">
                        <img src="./public/images/node.png" alt="node-js">
                    </div>
                </div>
                
            </section>
            
            
        `;
    }
}

customElements.define("pro-file", Profile);