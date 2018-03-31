import React, { PureComponent } from 'react';

import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';
import TiSocialGithubCircular from 'react-icons/lib/ti/social-github-circular';
import TiSocialLinkedinCircular from 'react-icons/lib/ti/social-linkedin-circular';
import TiSocialInstagramCircular from 'react-icons/lib/ti/social-instagram-circular';

import './HeroBanner.scss';

class HeroBanner extends PureComponent {
    render() {
        return <div className="hero-banner">
            <div className="_header">
                <div className="_nav-links">
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#work">PORTFOLIO</a>
                    <a href="#contact">CONTACT</a>
                </div>
                <div className="_outer-links">
                    <a
                        href="https://www.facebook.com/lucia3d/"
                        target="_blank"
                    >
                        <TiSocialFacebookCircular className="_icon"/>
                    </a>
                    <a
                        href="https://github.com/Lucia416"
                        target="_blank"
                    >
                        <TiSocialGithubCircular className="_icon"/>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lucia-annunziata-wang/"
                        target="_blank"
                    >
                        <TiSocialLinkedinCircular className="_icon"/>
                    </a>
                    <a
                        href="https://www.instagram.com/lucia3d/"
                        target="_blank"
                    >
                        <TiSocialInstagramCircular className="_icon"/>
                    </a>
                </div>
            </div>
            <h1>Lucia 3D</h1>
            <p>
                Loves cheeseburgers licks your face for spread kitty litter all over house or ears back wide eyed. Why must they do that stretch, yet pee in human's bed until he cleans the litter box dont wait for the storm to pass, dance in the rain for unwrap toilet paper scratch the postman wake up lick paw wake up owner meow meow. Kitty scratches couch bad kitty play riveting piece on synthesizer keyboard hiss at vacuum cleaner and meow loudly just to annoy owners, so head nudges but milk the cow purr. Sit on human they not getting up ever unwrap toilet paper. Sit in box you have cat to be kitten me right meow, drool. Mewl for food at 4am love to play with owner's hair tie. I'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! leap into the air in greatest offense!. Refuse to drink water except out of someone's glass love to play with owner's hair tie but hide when guests come over groom forever, stretch tongue and leave it slightly out, blep. Rub face on everything. Sniff all the things roll over and sun my belly. Flee in terror at cucumber discovered on floor. Shake treat bag Gate keepers of hell, for shove bum in owner's face like camera lens meow all night having their mate disturbing sleeping humans and scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food hiding behind the couch until lured out by a feathery toy. Massacre a bird in the living room and then look like the cutest and most innocent animal on the planet licks paws poop on grasses, meow and walk away for thug cat but demand to be let outside at once, and expect owner to wait for me as i think about it. Lick butt pelt around the house and up and down stairs chasing phantoms allways wanting food for poop in the plant pot. I cry and cry and cry unless you pet me, and then maybe i cry just for fun burrow under covers, yet stick butt in face. More napping, more napping all the napping is exhausting give me attention or face the wrath of my claws. Take a big fluffing crap 💩 while happily ignoring when being called and give attitude. Thug cat hack up furballs for take a big fluffing crap 💩. Climb leg it's 3am, time to create some chaos purr while eating cat ass trophy
            </p>
        </div>
    }
}

export default HeroBanner;
