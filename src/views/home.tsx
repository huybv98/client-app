import React, { useState } from 'react'
import Layout from 'components/AppLayout'
import { Card } from 'antd'
const Home = () => {
  const common =
    'flex items-center flex-col text-white bg-black border-white border-solid rounded-[5px] cursor-pointer'
  const space = 'm-[5px] py-[5px]'
  const alphabel = `h-[73px] w-[73px] ${space}`
  const number = `h-[73px] w-[60px] ${space}`
  const shortcuts = `h-[45px] w-[60px] ${space}`
  const data = [
    {
      row: [
        {
          name: 'Esc',
          icon1: null,
          icon2: null,
          name2: '',
          class: `h-[45px] w-[73px] ${space} mr-[15px] justify-center border-[2px]`,
        },
        {
          name: 'F1',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${shortcuts} ml-[15px] justify-between border-[2px]`,
        },
        {
          name: 'F2',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${shortcuts} justify-between border-[2px]`,
        },
        {
          name: 'F3',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${shortcuts} justify-between border-[2px]`,
        },
        {
          name: 'F4',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${shortcuts} mr-[15px] justify-between border-[2px]`,
        },
        {
          name: 'F5',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${shortcuts} ml-[15px] justify-between border-[2px]`,
        },
        {
          name: 'F6',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${shortcuts} justify-between border-[2px]`,
        },
        {
          name: 'F7',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${shortcuts} justify-between border-[2px]`,
        },
        {
          name: 'F8',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${shortcuts} mr-[15px] justify-between border-[2px]`,
        },
        {
          name: 'F9',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${shortcuts} ml-[15px] justify-between border-[2px]`,
        },
        {
          name: 'F10',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${shortcuts} justify-between border-[2px]`,
        },
        {
          name: 'F11',
          icon1: null,
          icon2: null,
          name2: 'Pause',
          class: `${shortcuts} justify-between border-[2px]`,
        },
        {
          name: 'F12',
          icon1: null,
          icon2: null,
          name2: 'Scr Lk',
          class: `${shortcuts} mr-[15px] justify-between border-[2px]`,
        },
        {
          name: 'PrtSc',
          icon1: null,
          icon2: null,
          name2: 'SysRq',
          class: `${shortcuts} ml-[15px] justify-between border-[2px]`,
        },
        {
          name: 'Del',
          icon1: null,
          icon2: null,
          name2: 'Ins',
          class: `${shortcuts} justify-between border-[2px]`,
        },
        {
          name: 'Home',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${shortcuts} mr-[15px] justify-between border-[2px]`,
        },
        {
          name: 'Pg Up',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${shortcuts} ml-[15px] justify-between border-[2px]`,
        },
        {
          name: 'Pg Dn',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${shortcuts} justify-between border-[2px]`,
        },
        {
          name: 'End',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${shortcuts} justify-between border-[2px]`,
        },
        {
          name: '',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${shortcuts} justify-between border-[2px]`,
        },
      ],
      class: '',
    },
    {
      row: [
        {
          name: '~',
          icon1: null,
          icon2: null,
          name2: '`',
          class: `h-[73px] w-[57px] ${space} justify-between border-[2px]`,
        },
        {
          name: '!',
          icon1: null,
          icon2: null,
          name2: '1',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: '@',
          icon1: null,
          icon2: null,
          name2: '2',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: '#',
          icon1: null,
          icon2: null,
          name2: '3',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: '$',
          icon1: null,
          icon2: null,
          name2: '4',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: '%',
          icon1: null,
          icon2: null,
          name2: '5',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: '^',
          icon1: null,
          icon2: null,
          name2: '6',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: '&',
          icon1: null,
          icon2: null,
          name2: '7',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: '*',
          icon1: null,
          icon2: null,
          name2: '8',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: '(',
          icon1: null,
          icon2: null,
          name2: '9',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: ')',
          icon1: null,
          icon2: null,
          name2: '0',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: '_',
          icon1: null,
          icon2: null,
          name2: '-',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: '+',
          icon1: null,
          icon2: null,
          name2: '=',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: 'Backspace',
          icon1: null,
          icon2: null,
          name2: '',
          class: `h-[73px] w-[140px] ${space} mr-[15px] justify-center border-[2px]`,
        },
        {
          name: 'N',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${number} ml-[15px] justify-center border-[2px]`,
        },
        {
          name: 'NumLk',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${number} justify-center border-[2px]`,
        },
        {
          name: '/',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${number} justify-center border-[2px]`,
        },
        {
          name: '*',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${number} justify-center border-[2px]`,
        },
      ],
      class: '',
    },
    {
      row: [
        {
          name: 'Tab',
          icon1: null,
          icon2: null,
          name2: '',
          class: `h-[73px] w-[98px] ${space} justify-center border-[2px]`,
        },
        {
          name: 'Q',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'W',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[5px] `,
        },
        {
          name: 'E',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'R',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'T',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'Y',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'U',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'I',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'O',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'P',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: '{',
          icon1: null,
          icon2: null,
          name2: '[',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: '}',
          icon1: null,
          icon2: null,
          name2: ']',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: '|',
          icon1: null,
          icon2: null,
          name2: '\\',
          class: `h-[73px] w-[98px] ${space} mr-[15px] justify-between border-[2px]`,
        },
        {
          name: '7',
          icon1: null,
          icon2: null,
          name2: 'Home',
          class: `${number} ml-[15px] justify-center border-[2px]`,
        },
        {
          name: '8',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${number} justify-center border-[2px]`,
        },
        {
          name: '9',
          icon1: null,
          icon2: null,
          name2: 'PgUp',
          class: `${number} justify-center border-[2px]`,
        },
        {
          name: '-',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${number} justify-center border-[2px]`,
        },
      ],
      class: '',
    },
    {
      row: [
        {
          name: 'Caps Lock',
          icon1: null,
          icon2: null,
          name2: '',
          class: `h-[73px] w-[119px] ${space} justify-center border-[2px]`,
        },
        {
          name: 'A',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[5px]`,
        },
        {
          name: 'S',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[5px]`,
        },
        {
          name: 'D',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[5px]`,
        },
        {
          name: 'F',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'G',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'H',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'J',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'K',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'L',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: ':',
          icon1: null,
          icon2: null,
          name2: ';',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: '"',
          icon1: null,
          icon2: null,
          name2: "'",
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: 'Enter',
          icon1: null,
          icon2: null,
          name2: '',
          class: `h-[73px] w-[160px] ${space} mr-[15px] justify-center border-[2px]`,
        },
        {
          name: '4',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${number} ml-[15px] justify-center border-[2px]`,
        },
        {
          name: '5',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${number} justify-center border-[2px]`,
        },
        {
          name: '6',
          icon1: null,
          icon2: null,
          name2: 'PgUp',
          class: `${number} justify-center border-[2px]`,
        },
        {
          name: '+',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${number} justify-center border-[2px]`,
        },
      ],
      class: '',
    },
    {
      row: [
        {
          name: 'Shift',
          icon1: null,
          icon2: null,
          name2: '',
          class: `h-[73px] w-[156px] ${space} justify-center border-[2px]`,
        },
        {
          name: 'Z',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'X',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'C',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'V',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'B',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'N',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'M',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: '<',
          icon1: null,
          icon2: null,
          name2: ',',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: '>',
          icon1: null,
          icon2: null,
          name2: '.',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: '?',
          icon1: null,
          icon2: null,
          name2: '/',
          class: `${alphabel} justify-between border-[2px]`,
        },
        {
          name: 'Shift',
          icon1: null,
          icon2: null,
          name2: '',
          class: `h-[73px] w-[123px] ${space} justify-center border-[2px]`,
        },
        {
          name: '',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} mr-[15px] justify-center border-[5px]`,
        },
        {
          name: '1',
          icon1: null,
          icon2: null,
          name2: 'End',
          class: `${number} ml-[15px] justify-center border-[2px]`,
        },
        {
          name: '2',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${number} justify-center border-[2px]`,
        },
        {
          name: '3',
          icon1: null,
          icon2: null,
          name2: 'PgDn',
          class: `${number} justify-center border-[2px]`,
        },
        {
          name: 'Enter',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${number} justify-center border-[2px] enter`,
        },
      ],
      class: 'relative',
    },
    {
      row: [
        {
          name: 'Ctrl',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'Fn',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: '',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'Alt',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: '____________________________',
          icon1: null,
          icon2: null,
          name2: '',
          class: 'h-[85px] w-[405px] m-[5px] py-[10px] justify-end border-[2px]',
        },
        {
          name: 'Alt Gr',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: '',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[2px]`,
        },
        {
          name: 'Ctrl',
          icon1: null,
          icon2: null,
          name2: '',
          class: `h-[73px] w-[123px] ${space} justify-center border-[2px]`,
        },
        {
          name: '',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[5px]`,
        },
        {
          name: '',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} justify-center border-[5px]`,
        },
        {
          name: '',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${alphabel} ml-[12px] justify-center border-[5px]`,
        },
        {
          name: '0',
          icon1: null,
          icon2: null,
          name2: 'Ins',
          class: `${number} justify-center border-[2px]`,
        },
        {
          name: '.',
          icon1: null,
          icon2: null,
          name2: 'Del',
          class: `${number} justify-center border-[2px]`,
        },
        {
          name: 'Enter',
          icon1: null,
          icon2: null,
          name2: '',
          class: `${number} justify-center border-[2px]`,
        },
      ],
      class: '',
    },
  ]
  const [keyPressed, setKeyPressed] = useState<string>('')
  const [text, setText] = useState<string>('')

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e)
    const textNew = text.concat('', e.key)
    setKeyPressed(e.key)
    setText(textNew)
  }

  return (
    <>
      {/*<header className="App-header">*/}
      {/*  <Layout />*/}
      {/*</header>*/}
      {/*<div>HelloWorld</div>*/}
      {/*<div className="flex">*/}
      {/*  <div>1</div>*/}
      {/*  <div>2</div>*/}
      {/*  <div>3</div>*/}
      {/*</div>*/}
      <div
        className="flex flex-col h-screen min-h-[700px]"
        tabIndex={0}
        onKeyDown={(e) => handleKeyPress(e)}
      >
        <div className="text-center p-3">
          <p>{text}</p>
        </div>
        <div className="text-black bg-black keyboard background-animation mt-auto">
          {data && data.length && (
            <div className="wrap px-[10px] py-[15px]">
              {data.map((obj, index) => {
                return (
                  <div key={index} className={`${obj?.class} row flex flex-wrap`}>
                    {obj &&
                      obj.row.length &&
                      obj.row.map((item, i) => {
                        return (
                          <div
                            key={i}
                            className={`${item?.class} ${common} item ${
                              item?.name === keyPressed.toUpperCase() ? 'active' : ''
                            }`}
                          >
                            {item.name && <div className="name">{item.name}</div>}
                            {item.name2 && <div className="name-2">{item.name2}</div>}
                            {item.icon1 ||
                              (item.icon1 && (
                                <div className="icon-wrap">
                                  <div className="icon-l">{item?.icon1}</div>
                                  <div className="icon-r">{item?.icon2}</div>
                                </div>
                              ))}
                          </div>
                        )
                      })}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
