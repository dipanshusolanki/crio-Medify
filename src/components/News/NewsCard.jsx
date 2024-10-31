import {Card, CardContent, CardMedia, Typography} from "@mui/material";

const NewsCard = () => {
    return (
        <Card sx={{
            maxWidth: 363,
            height: 458,
            border:'1px solid #00000012',
            borderRadius:'10px',
            boxShadow:'none',
        }}>
            <CardMedia
                sx={{ height: 294 }}
                image="/detox.png"
                title="detox"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{
                    fontFamily: 'Poppins',
                    fontWeight: '500',
                    fontSize: '17px',
                    lineHeight: '27px',
                    color: '#77829D',
                    display:'flex',
                    gap:'7px'
                }}>
                    Medical <span className="text-[#DDDDDD]">|</span><span className="text-[16px]">March 31,2022</span>
                </Typography>
                <Typography variant="body2" sx={{
                    color: '#1B3C74',
                    fontFamily:'Poppins',
                    fontWeight: '500',
                    fontSize: '18px',
                    lineHeight: '27px',
                    marginBottom:'4px'
                }}>
                    6 Tips To Protect Your Mental Health When You’re Sick
                </Typography>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: '500',
                    fontSize: '17px',
                    lineHeight: '27px',
                    color: '#1B3C74',
                    display:'flex',
                    alignItems:'center',
                    gap:'10px'
                }}>
                    <span>
                        <img src="/doctorprofile.png" alt="doctorprofile"/>
                    </span>
                    Rebecca Lee
                </Typography>
            </CardContent>
        </Card>
    )
}
export default NewsCard
