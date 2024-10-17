interface BasicCardProps {
  reverse?: boolean
}

const BasicCard: React.FC<BasicCardProps> = ({ reverse }) => {
  return (
    <div
      className={`flex flex-1 flex-wrap rounded-[10px] w-[80%] min-h-[550px] items-stretch ${
        reverse ? 'flex-row-reverse' : ''
      }`}
      style={{ boxShadow: '0px 4px 4px 0 rgba(0,0,0,0.25)' }}
    >
      <div className="box-border flex-1 min-w-96 flex items-center justify-center min-h-[350px]">
        <div className="max-w-[80%] max-h-[80%] text-left">
          <p className="text-5xl font-bold text-left mb-1">Did you know?</p>
          <p className="text-4xl text-left text-black/60">
            Almost 90% of house plants never make it past their first 6 months and end up in the bin
            just shortly after being purchased.
          </p>
        </div>
      </div>
      <div className="flex-1 bg-[url('http://localhost:3000/api/media/file/hero_image.png')] bg-cover bg-no-repeat bg-center min-w-96 min-h-[350px]"></div>
    </div>
  )
}

export default BasicCard
