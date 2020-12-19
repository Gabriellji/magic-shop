import React, { useContext, useState } from 'react';
import { MagicContext } from '../../context/MagicProvider';
import Loader from '../loader';
import Modal from "react-modal";
import Card from '../card';

import './CardList.scss';
import './Modal.scss';
import { cannabisImg } from '../../extra-data/img';

Modal.setAppElement("#root");

const CardList = () => {

    const context = useContext(MagicContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    }

    return (
        <div className="cardlist_wrap">
            {
                context.loading ? <Loader /> : context.strains.data.map((el, index) => (
                        el.image.includes("no_image.png")
                        ? el.image = cannabisImg[Math.floor(Math.random() * cannabisImg.length)]
                        : <Card
                            onClick={toggleModal}
                            key={index}
                            name={el.name}
                            image={el.image}
                            seedCompany={el.seedCompany.name}
                            genetics={el.genetics.names}
                        />))
            }
            <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
          >
            <div>My modal dialog.</div>
            <button onClick={toggleModal}>Close modal</button>
          </Modal>
        </div>
    );
};

export default CardList;