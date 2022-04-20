import styled from "styled-components"

export default function Header(){
    return (
      <HeadBox>
          <div>
              Login
          </div>
        <div>
            Outlet B9
        </div>
        <div>
            CI
        </div>
      </HeadBox>
    )
  }

const HeadBox = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    background-color: #FFFFFF;
`;