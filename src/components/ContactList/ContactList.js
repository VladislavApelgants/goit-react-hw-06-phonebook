import s from './ContactList.module.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as contactsActions from '../redux/contacts/contacts-actions';

function ContactList({ data }) {
  const dispatch = useDispatch();

  return (
    <ul className={s.contact__list}>
      {data.map(e => (
        <li key={e.id} className={s.contact__item}>
          <span className={s.contact__name}>{e.name}:</span>
          <span className={s.contact__number}>{e.number}</span>
          <button
            type="button"
            className={s.contact__button}
            onClick={() => dispatch(contactsActions.contactsDelete(e.id))}
          ></button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  data: PropTypes.array.isRequired,
};
