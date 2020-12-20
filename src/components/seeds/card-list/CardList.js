import React, { useContext, useState } from 'react';
import { MagicContext } from '../../../context/MagicProvider';
import Loader from '../../reuse-components/loader';
import Modal from "react-modal";
import Card from '../card';
import Button from '../../reuse-components/button';
import ModalCard from '../modal-card'

import './CardList.scss';
import './Modal.scss';
import { cannabisImg } from '../../../extra-data/img';
import shopcart from '../../../extra-data/img/shopping-cart.png';
import info from '../../../extra-data/img/cannabis.png';

const element = <img src={shopcart} alt="shopping-cart"></img>
const cannabis = <img src={info} alt="cannabis"></img>

Modal.setAppElement("#root");

const CardList = () => {

    const context = useContext(MagicContext);
    const [isOpen, setIsOpen] = useState(false);
    const [clicked, setClicked] = useState('');

    console.log(clicked);

    const toggleModal = (e) => {
        setIsOpen(!isOpen);
        const clickedItem = context.strains.data[Number(e.target.id)];
        setClicked(clickedItem);
        console.log(clicked, 'from click')
    }

    return (
        <div className="cardlist_wrap">
            {
                context.loading ? <Loader /> : context.strains.data.map((el, index) => (
                    el.image.includes("no_image.png")
                        ? el.image = cannabisImg[Math.floor(Math.random() * cannabisImg.length)]
                        : <Card
                            id={index}
                            onClick={toggleModal}
                            key={index}
                            name={el.name}
                            image={el.image}
                            seedCompany={el.seedCompany.name}
                        />))
            }
            {/* {
                context.loading ? console.log(context.strains.data
                .map(el => (
                    context.infoStrains
                    .filter(elem => (
                        elem.
                    ))
                )))
            } */}
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                {

                    clicked && <>
                        <ModalCard
                            name={clicked.name}
                            image={clicked.image}
                            seedCompany={clicked.seedCompany.name}
                            genetics={clicked.genetics.names}
                        />
                        <div className="card_btn_wrap">
                            <Button
                                className="btn card_btn"
                                text={cannabis}
                            />
                            <Button
                                className="btn card_btn"
                                text={element}
                            />
                        </div>
                    </>
                }
                <Button 
                text="Close modal"
                onClick={toggleModal}/>
            </Modal>
           { console.log(clicked, 'from div')}
        </div>
    );
};

export default CardList;