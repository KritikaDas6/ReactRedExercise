export default function Form(){
    const [fullName, setFullName] = useState("");

    const handleName = (e) => {
        const {value} = e.target //NEW!
        setFullName(value)
    }

    const handleSubmit = () => {
        console.log(values)
    };

  return(



    <>
      <Typography variant="h5" sx={{ mb: 1 }}>
          Full Name
      </Typography>
      <TextField
          type="text"
          name="fullName"
          value={fullName} // NEW!
          onChange={handleName}
      />

        <Button
        sx={{ m:1 }}
        onClick={handleSubmit}
        >
          Submit
        </Button>
    </>
  )
}
