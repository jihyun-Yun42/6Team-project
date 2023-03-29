import { useAddMenu } from '../../hooks/Menu/useAddMenu';
import { useFileInput } from '../../hooks/Menu/useFileInput';
import Button from '../../components/Button';
import Input, { FileForm, FileLabel } from '../../components/Input';
import {
  ModalBackground,
  ModalCloseBtn,
  ModalContent,
  ModalRoot,
  ModalTrigger,
} from '../../components/Modal';
import {
  AlertModalCloseBtn,
  AlertModalContent,
  AlertModalRoot,
  AlertModalTrigger,
} from '../../components/AlertModal';

export const AddMenu = ({ children }) => {
  const { addMenu, addStatue, reset } = useAddMenu();
  const newMenu = {
    title: '',
    category: '',
    price: '',
    file: null,
  };

  const [inputValue, onChangeHandler, fileInputHandler, submitFormHandler] = useFileInput(
    newMenu,
    addMenu,
    null
  );

  return (
    <ModalRoot>
      <ModalTrigger>
        {children}
        <ModalBackground />
      </ModalTrigger>
      <ModalContent>
        <ModalCloseBtn />
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
            value="DEFAULT"
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
          <AlertModalRoot>
            <AlertModalTrigger>
              <Button type="button">제출하기</Button>
            </AlertModalTrigger>
            <AlertModalContent>
              <AlertModalCloseBtn />
              {addStatue === 'idle' ? (
                <>
                  <div>정말 작성하시겠습니까?</div>
                  <Button type="button" onClick={submitFormHandler} bgcolor="red">
                    제출
                  </Button>
                  <AlertModalTrigger>
                    <Button>취소</Button>
                  </AlertModalTrigger>
                </>
              ) : addStatue === 'loading' ? (
                <>로딩중...</>
              ) : addStatue === 'success' ? (
                <>
                  <div>작성이 완료되었습니다.</div>
                  <ModalTrigger>
                    <Button>완료</Button>
                  </ModalTrigger>
                </>
              ) : (
                <>
                  <div>작성에 실패하였습니다.</div>
                  <ModalTrigger>
                    <Button>완료</Button>
                  </ModalTrigger>
                  <AlertModalTrigger>
                    <Button bgcolor="red" onClick={() => reset()}>
                      돌아가기
                    </Button>
                  </AlertModalTrigger>
                </>
              )}
            </AlertModalContent>
          </AlertModalRoot>
        </FileForm>
      </ModalContent>
    </ModalRoot>
  );
};
