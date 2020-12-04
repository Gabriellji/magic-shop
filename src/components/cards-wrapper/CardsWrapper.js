import CardList from '../card-list';
import ButtonWrapper from '../button-wrapper';
import AmountPanel from '../amount-panel';

import './CardsWrapper.scss';

const CardsWrapper = () => (
    <div className="main-cards_wrapper">
        <AmountPanel />
        <CardList />
        <ButtonWrapper />
    </div>
)

export default CardsWrapper;