import { useFileInput } from '../../hooks/Menu/useFileInput';
import { useUpdateMenu } from '../../hooks/Menu/useUpdateMenu';
import { ModalRoot, ModalTrigger } from '../Modal';

export const UpdateMenu = ({ item }) => {
  const { updateMenu } = useUpdateMenu();

  const editMenu = {
    id: item.id,
    title: item.title,
    category: item.category,
    price: item.price,
    file: null,
  };

  const [inputValue, onChangeHandler, fileInputHandler, submitFormHandler] = useFileInput(
    {
      editMenu,
      updateMenu,
      id: editMenu.id,
    }
  );

  return (
    <form onSubmit={submitFormHandler}>
      <input
        type="file"
        onChange={fileInputHandler}
        accept="image/png, image/jpeg, image/jpg"
      />
      <input
        type="text"
        name="title"
        value={inputValue.title}
        onChange={onChangeHandler}
        placeholder="버거 이름을 입력해주세요"
      />
      <input
        type="text"
        name="price"
        value={inputValue.price}
        onChange={onChangeHandler}
        placeholder="가격을 입력해주세요"
      />
      <select
        name="category"
        defaultValue={'DEFAULT'}
        value={this}
        onChange={onChangeHandler}
      >
        <option value="DEFAULT" disabled>
          카테고리를 선택해주세요
        </option>
        <option value="NEW">신제품</option>
        <option value="premium">프리미엄</option>
        <option value="Whopper">와퍼&주니어</option>
        <option value="chicken">치킨&슈림프버거</option>
        <option value="side">사이드</option>
        <option value="drink">음료&디저트</option>
        <option value="dog">독퍼</option>
      </select>
      <ModalRoot>
        <ModalTrigger>
          <button type="submit">제출</button>
        </ModalTrigger>
      </ModalRoot>
    </form>
  );
};
