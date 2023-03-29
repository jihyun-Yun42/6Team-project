import { useFileInput } from '../../hooks/Menu/useFileInput';
import { useUpdateMenu } from '../../hooks/Menu/useUpdateMenu';
import Input, { FileForm, FileLabel } from '../Input';
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

  const [inputValue, onChangeHandler, fileInputHandler] = useFileInput(editMenu);

  const submitFormHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', inputValue.title);
    formData.append('category', inputValue.category);
    formData.append('price', inputValue.price);
    formData.append('file', inputValue.file);
    // updateMenu({
    //   formData,
    //   title: inputValue.title,
    //   category: inputValue.category,
    //   price: inputValue.price,
    //   id: inputValue.id,
    // });
    updateMenu({ formData, id: editMenu.id });
  };
  return (
    <FileForm onSubmit={submitFormHandler}>
      <FileLabel>
        사진올리기
        <input
          type="file"
          onChange={fileInputHandler}
          accept="image/png, image/jpeg, image/jpg"
          style={{ display: 'none' }}
        />
      </FileLabel>
      <Input
        type="text"
        name="title"
        value={inputValue.title}
        onChange={onChangeHandler}
        placeholder="버거 이름을 입력해주세요"
      />
      <Input
        type="text"
        name="price"
        value={inputValue.price}
        onChange={onChangeHandler}
        placeholder="가격을 입력해주세요"
      />
      <select
        name="category"
        defaultValue={'DEFAULT'}
        value={inputValue.category}
        onChange={onChangeHandler}
        style={{
          border: '1px solid lightgray',
          borderRadius: '10px',
          padding: '10px',
          fontSize: '18px',
          fontFamily: 'TmoneyRoundWindExtraBold',
        }}
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
        {/* <ModalTrigger> */}
        <button type="submit">제출</button>
        {/* </ModalTrigger> */}
      </ModalRoot>
    </FileForm>
  );
};
