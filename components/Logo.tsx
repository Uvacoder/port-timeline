import Link from 'next/link'

const GradientSVG = () => (
  <div>
    <style jsx>{`
      div {
        background: var(--jb-gradient);
        width: 22px;
        height: 22px;
        border-radius: 4px;
      }
    `}</style>
  </div>
)

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <GradientSVG />
        <h1>Julián Benegas</h1>
        <style jsx>{`
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
            padding: 8px;
            border-radius: 2px;
            background: transparent;
          }
          h1 {
            color: var(--grey-9);
            margin-left: 8px;
            font-size: var(--fs-2xl);
            line-height: 1;
          }
          a:hover {
            background: var(--selection-background);
          }
        `}</style>
      </a>
    </Link>
  )
};

export default Logo;
