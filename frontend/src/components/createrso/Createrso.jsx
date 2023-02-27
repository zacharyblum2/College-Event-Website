import React from 'react';
import './createrso.css';

const Createrso = () => {
  return (
    <>
        {/* Store RSO name, and admin id (who creates it) */}
        <form id='create' action="">
            <div class="form-outline mb-4">
                <label class="form-label" for="rsoName">RSO Name</label>
                <input type="text" id="rsoName" class="form-control" placeholder="Something Club"/>
            </div>
            <div class="form-outline mb-4">
                <label for="textArea">Description</label>
                <textarea id="textArea" rows="3" class="form-control" placeholder="Place club description here"></textarea>
            </div>

            {/* Onclick will submit data to database and return to "/rso" */}
            <div class="form-outline mb-4 but">
                <button type="submit" class="btn btn-success">Submit</button>
            </div>
        </form>
    </>
  )
}

export default Createrso