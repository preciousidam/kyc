

export const ContactForm = () => {

    return (
        <form className="contactForm">
            <div className="row">
                <div class="form-group col-md-6">
                    <label for="name-contact">Full name</label>
                    <input type="text" class="form-control" id="name-contact" />
                </div>
                <div class="form-group col-md-6">
                    <label for="email-contact">Email address</label>
                    <input type="email" class="form-control" id="email-contact" />
                </div>
                <div class="form-group col-md-12">
                    <label for="subject-contact">Subject</label>
                    <input type="text" class="form-control" id="subject-contact" />
                </div>
                <div class="form-group col-md-12">
                    <label for="message-contact">Message</label>
                    <textarea name="message" 
                        className="form-control" id="message-contact" 
                        rows="3" />
                        
                </div>
            </div>
            <button className="button" type="submit" >Submit</button>
        </form>
    )
}