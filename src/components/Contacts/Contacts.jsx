import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/store';

const Contacts = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(state => state.contacts);
  const filterContact = useSelector(state => state.filter);

  const contacts = contactsList?.filter(el =>
    el.name?.toLowerCase().includes(filterContact?.toLowerCase())
  );

  console.log(contactsList);

  const component = contacts?.map(contact => {
    return (
      <li key={contact.id}>
        <p>
          {contact.name}: {contact.number}
        </p>
        <button type="button" onClick={() => dispatch(remove(contact.id))}>
          delete me please
        </button>
      </li>
    );
  });

  return (
    <div>
      <ul>
        {contactsList.length >= 1 ? (
          component
        ) : (
          <li>
            <p>Нет сохраненных контактов</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Contacts;
