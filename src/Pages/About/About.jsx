import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Heading from '../../Components/From/Heading';
import Header from '../../Components/Header/Header';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <>
            <Header></Header>
            <Fade>

            <Heading text="Our Story"></Heading>
            </Fade>
            <Fade bottom>
            <div className="my-10 container mx-auto">
                <div className="flex justify-center items-center mx-2">
                    <p className="mx-4">Mozaffar Garden &amp; Resort is situated on 100 acres of fine property. It is in the heart of Satkhira, only two hours away from the Sundarbans with all the transport facilities, but it is enough away from the crowd of the busy town.

                        The area is fairly open with numerous trees to provide our customers with both sun and shade and the most desired greeneries and fresh air. We have four resorts for our guests, one of which is very appealing to be situated on a lake and we provide 30 rooms in total under very reasonable price. The rooms are well decorated and furnished with air conditioner, television, intercom, geyser and every other facility of a modern life. It serves excellent Bengali and Chinese food by our well experienced chef. There are walking and sitting arrangements on the grassy land, swimming on ponds to get us some flavor of nature. Our customers can go for boating with paddleboats on the lake or spend some time fishing. Keeping the young guests in their minds, they have created playground, 3D zoo and interesting sculptures. We organized outdoor badminton and indoor table tennis for it is hale and hearty for it’s customers on their vacation. And there is mosque for both men and women for their most convenience.</p>
                </div>
            </div>
            </Fade>
            <Footer></Footer>
        </>
    );
};

export default About;