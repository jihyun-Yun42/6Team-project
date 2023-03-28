import { useAddMenu } from '../../hooks/Menu/useAddMenu';
import { useFileInput } from '../../hooks/Menu/useFileInput';
import Button from '../Button';
import Input, { FileForm, FileLabel } from '../Input';
import {
  ModalBackground,
  ModalCloseBtn,
  ModalContent,
  ModalRoot,
  ModalTrigger,
} from '../Modal';

export const AddMenu = ({ children }) => {
  const { addMenu } = useAddMenu();
  const newMenu = {
    title: '',
    category: '',
    price: '',
    file: null,
  };

  const [inputValue, onChangeHandler, fileInputHandler] = useFileInput(newMenu);

  const submitFormHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', inputValue.title);
    formData.append('category', inputValue.category);
    formData.append('price', inputValue.price);
    formData.append('file', inputValue.file);
    addMenu(formData);
  };

  return (
    <ModalRoot>
      <ModalTrigger>
        {children}
        <ModalBackground />
      </ModalTrigger>
      <ModalContent>
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
            value={this}
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
          {/* <ModalCloseBtn type="submit"> */}
          <button type="submit">제출</button>
          {/* </ModalCloseBtn> */}
        </FileForm>
      </ModalContent>
    </ModalRoot>
  );
};
