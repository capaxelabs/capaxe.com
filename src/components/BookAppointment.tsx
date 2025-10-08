import Cal from "@calcom/embed-react";


const BookAppointment = () => {

return (

<Cal
              calLink="capaxe/30min" // Direct link to 30min event type
              
              config={{
                name: "Mukesh Yadav",
                email: "",
                notes: "Book a consultation call with Capaxe Labs",
                theme: "light"
                
              }}
              style={{
                width: "100%",
                height: "100%",
                overflow: "scroll"
              }}
            />
)
}

export default BookAppointment;