import React from "react";

const CategoryFormModal = () => {
	return (
		<>
			<div
				className="modal flex fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden items-center justify-center overflow-y-auto z-20 bg-black/80"
				id="categoryFormModalOverlay"
				tabIndex={-1}
				aria-labelledby="categoryFormModalLabel"
				aria-hidden="true"
			>
				<div className="flex modal-dialog absolute pointer-events-none w-11/12">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white z-30 bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-body relative p-4">
                            Hello world
                        </div>
                    </div>
                </div>
			</div>
		</>
	);
};

export default CategoryFormModal;
